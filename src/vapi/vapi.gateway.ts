import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class VapiGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log(
      `✅ [CONECTADO] Cliente conectado: ${client.id}. Iniciando uma nova chamada...`,
    );
  }

  handleDisconnect(client: Socket) {
    console.log(
      `❌ [DESCONECTADO] Cliente desconectado: ${client.id}. Chamada finalizada.`,
    );
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: any): void {
    console.log(`📩 [MENSAGEM RECEBIDA] do ${client.id}:`, payload);

    // Futuramente, aqui entrará a lógica do LangGraph.
    // Por agora, apenas para teste, podemos enviar uma resposta simples de volta.
    client.emit('message', 'Mensagem recebida com sucesso!');
  }
}
