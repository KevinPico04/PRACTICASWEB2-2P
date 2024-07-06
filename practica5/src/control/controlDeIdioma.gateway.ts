import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

interface User {
  id: string;
  sockets: string[];
}

interface ControlDeIdiomaTransaction {
  id?: string;
  estudianteId: number;
  idiomaId: number;
  porcentajeLectura: number;
  porcentajeEscritura: number;
  porcentajeEscuchar_hablar: number;
  estado?: string;
}

@WebSocketGateway({ cors: true })
export class ControlDeIdiomaGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private users: Record<string, User> = {};
  private activeTransactions: ControlDeIdiomaTransaction[] = [];

  handleConnection(client: Socket) {
    const userId = client.handshake.query.userId as string;
    if (!this.users[userId]) {
      this.users[userId] = { id: userId, sockets: [] };
    }

    if (this.users[userId].sockets.length >= 3) {
      client.disconnect();
      return;
    }

    this.users[userId].sockets.push(client.id);
  }

  handleDisconnect(client: Socket) {
    const userId = client.handshake.query.userId as string;
    if (this.users[userId]) {
      this.users[userId].sockets = this.users[userId].sockets.filter(id => id !== client.id);
      if (this.users[userId].sockets.length === 0) {
        delete this.users[userId];
      }
    }
  }

  @SubscribeMessage('agregar-controlDeIdioma')
  async handleAddTransaction(client: Socket, payload: ControlDeIdiomaTransaction): Promise<void> {
    const newTransaction: ControlDeIdiomaTransaction = { ...payload, id: Date.now().toString(), estado: 'ACTIVO' };
    this.activeTransactions.push(newTransaction);
    this.server.emit('nueva-controlDeIdioma', newTransaction);
  }

  @SubscribeMessage('consultar-activos')
  handleGetActiveTransactions(client: Socket): void {
    this.server.emit('lista-controlDeIdioma', this.activeTransactions);
  }
}
