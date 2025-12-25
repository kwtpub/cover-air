import { Telegraf } from 'telegraf';
import { FormModel } from '../models/FormModel';

export class TelegramService {
  private bot: Telegraf;
  private chatId: string;

  constructor(botToken: string, chatId: string) {
    this.bot = new Telegraf(botToken);
    this.chatId = chatId;
  }

  async sendFormData(formData: FormModel): Promise<void> {
    try {
      const message = formData.toMessage();
      await this.bot.telegram.sendMessage(this.chatId, message);
    } catch (error) {
      console.error('Ошибка отправки сообщения в Telegram:', error);
      throw new Error('Не удалось отправить сообщение в Telegram');
    }
  }
}

