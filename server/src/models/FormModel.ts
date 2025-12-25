export interface FormData {
  phone: string;
  contactMethod: string;
  promo?: string;
}

export class FormModel {
  phone: string;
  contactMethod: string;
  promo?: string;

  constructor(data: FormData) {
    this.phone = data.phone;
    this.contactMethod = data.contactMethod;
    this.promo = data.promo;
  }

  validate(): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!this.phone || this.phone.trim().length === 0) {
      errors.push('Номер телефона обязателен');
    }

    if (!this.contactMethod || this.contactMethod.trim().length === 0) {
      errors.push('Способ связи обязателен');
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  toMessage(): string {
    let message = `📋 Новая заявка с сайта\n\n`;
    message += `📞 Номер телефона: ${this.phone}\n`;
    message += `💬 Способ связи: ${this.contactMethod}\n`;
    
    if (this.promo && this.promo.trim().length > 0) {
      message += `🎁 Промокод: ${this.promo}\n`;
    }

    return message;
  }
}

