import { useEffect, useState } from 'react';

import { LogsTable, NotificationLog } from '../components/logs/LogsTable';
import { FormData, NotificationForm } from '../components/notifications/NotificationForm';
import {
  Container,
  Flex,
  FlexItem,
  Footer,
  Heading,
  SubHeading,
  Wrapper
} from '../components/ui';
import { API_URL } from '../constants';

type AlertProps = {
  type: 'error' | 'success';
  message: string;
};

const FormNotification = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [logs, setLogs] = useState<NotificationLog[]>([]);
  const [alert, setAlert] = useState<AlertProps | null>(null);

  const getLogs = async () => {
    const request = await fetch(`${API_URL}/logs`);
    const response = await request.json();
    setLogs(response);
  }

  useEffect(() => {
    getLogs();
  }, []);

  const onSubmit = async (data: FormData) => {
    if (!data?.category || !data?.message?.trim()) {
      setAlert({ type: 'error', message: 'All fields above are required' });
      return;
    }

    try {
      setIsLoading(true);
      const request = await fetch(`${API_URL}/notification`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const response = await request.text();

      setIsLoading(false);
      setAlert({ type: 'success', message: response });

      getLogs();
    } catch (error) {
      setAlert({ type: 'error', message: error as string });
    }

  };

  return (
    <Wrapper>
      <Container>
        <SubHeading>Hi, let's send</SubHeading>
        <Heading>Your first notification</Heading>

        <Flex>
          <FlexItem flex={1}>
            <NotificationForm
              onSubmit={onSubmit}
              loading={isLoading}
              alertType={alert?.type}
              alertMessage={alert?.message}
            />
          </FlexItem>

          <FlexItem flex={1}>
            <LogsTable logs={logs} />
          </FlexItem>
        </Flex>

        <Footer>Developed by Daniel Castillo</Footer>
      </Container>
    </Wrapper>
  );
};

export default FormNotification;
