import { Router } from 'express';
import { FormController } from '../controllers/FormController';
import { TelegramService } from '../services/TelegramService';

const router = Router();

const telegramService = new TelegramService(
  process.env.TELEGRAM_BOT_TOKEN || '',
  process.env.TELEGRAM_CHAT_ID || ''
);

const formController = new FormController(telegramService);

router.post('/submit', (req, res) => {
  formController.submitForm(req, res);
});

export default router;

