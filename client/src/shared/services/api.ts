const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export interface FormSubmitData {
  phone: string;
  contactMethod: string;
  promo?: string;
  name?: string;
  country?: string;
  amount?: string;
}

export interface FormSubmitResponse {
  success: boolean;
  message?: string;
  errors?: string[];
}

export const submitForm = async (data: FormSubmitData): Promise<FormSubmitResponse> => {
  try {
    // Форматируем телефон с +7
    const formattedPhone = data.phone.startsWith('+7') 
      ? data.phone 
      : `+7${data.phone.replace(/\D/g, '')}`;

    const response = await fetch(`${API_BASE_URL}/form/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: formattedPhone,
        contactMethod: data.contactMethod,
        promo: data.promo || undefined,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || 'Ошибка при отправке формы',
        errors: result.errors,
      };
    }

    return result;
  } catch (error) {
    console.error('Ошибка отправки формы:', error);
    return {
      success: false,
      message: 'Не удалось отправить форму. Попробуйте позже.',
    };
  }
};


