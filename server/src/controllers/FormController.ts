import { Request, Response } from 'express';
import { FormModel } from '../models/FormModel';
import { TelegramService } from '../services/TelegramService';

export class FormController {
  private telegramService: TelegramService;

  constructor(telegramService: TelegramService) {
    this.telegramService = telegramService;
  }

  async submitForm(req: Request, res: Response): Promise<void> {
    try {
      const { phone, contactMethod, promo } = req.body;

      const formData = new FormModel({
        phone,
        contactMethod,
        promo,
      });

      const validation = formData.validate();

      if (!validation.isValid) {
        res.status(400).json({
          success: false,
          errors: validation.errors,
        });
        return;
      }

      await this.telegramService.sendFormData(formData);

      res.status(200).json({
        success: true,
        message: 'Заявка успешно отправлена',
      });
    } catch (error) {
      console.error('Ошибка обработки формы:', error);
      res.status(500).json({
        success: false,
        message: 'Внутренняя ошибка сервера',
      });
    }
  }
}

