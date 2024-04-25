import { ChangeEvent, useEffect, useState } from 'react';

import { CATEGORIES } from '../../constants';
import { Alert, Button, HeroSection, SubHeading } from '../ui';
import { Select, TextArea } from '../ui/form';

export type FormData = {
  message: string;
  category: string;
};

export interface NotificationFormProps {
  onSubmit: (formData: FormData) => void;
  loading?: boolean;
  alertType?: 'error' | 'success';
  alertMessage?: string;
}

export const NotificationForm = ({
  onSubmit,
  loading,
  alertType,
  alertMessage
}: NotificationFormProps) => {
  const [category, setCategory] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);

  useEffect(() => {
    setShowAlert(alertMessage ? true : false);
  }, [alertMessage]);

  const handleOnChange = (
    setStateFunction: React.Dispatch<React.SetStateAction<string>>
  ) => (e: ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
    setStateFunction(e.target.value);
    setShowAlert(false);
  };

  const handleOnSubmit = () => {
    setShowAlert(true);
    onSubmit({ message, category });

    if (message && category) {
      resetForm();
    }
  };

  const resetForm = () => {
    setCategory('');
    setMessage('');
  };

  return (
    <HeroSection>
      <div className="white">
        <SubHeading>Submission form</SubHeading>

        <Select
          options={CATEGORIES}
          onChange={handleOnChange(setCategory)}
          value={category}
          placeholder="Select a category"
        />

        <TextArea
          placeholder="Message"
          onChange={handleOnChange(setMessage)}
          value={message}
        />

        {showAlert ? <Alert type={alertType}>{alertMessage}</Alert> : null}

        <Button onClick={handleOnSubmit}>
          {loading ? 'Sending...' : 'Send'}
        </Button>
      </div>
    </HeroSection>
  );
};