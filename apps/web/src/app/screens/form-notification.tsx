import React, { ChangeEvent, useEffect, useState } from 'react';

import { Select, TextArea } from '../components/form';
import {
  Alert,
  Button,
  Container,
  Flex,
  FlexItem,
  Footer,
  Heading,
  HeroSection,
  SubHeading,
  Wrapper
} from '../components/ui';
import { CATEGORIES } from '../constants';
import { formatDate } from '../utils';

interface NotificationLog {
  userId: number;
  channel: string;
  category: string;
  content: string;
  timestamp: string;
}

const FormNotification = () => {
  const [category, setCategory] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [logs, setLogs] = useState<NotificationLog[]>([]);

  const getLogs = async () => {
    const request = await fetch('http://localhost:3000/logs');
    const response = await request.json();
    setLogs(response);
  }

  useEffect(() => {
    getLogs();
  }, []);

  const handleOnChange = (
    setStateFunction: React.Dispatch<React.SetStateAction<string>>
  ) => (e: ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
    setStateFunction(e.target.value);
    setError(null);
  };

  const onSubmit = async () => {
    if (!category || !message?.trim()) {
      setError('All fields above are required');
      return;
    }

    try {
      setIsLoading(true);
      const data = {
        message,
        category
      };
      const request = await fetch('http://localhost:3000/notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const response = await request.text();

      setIsLoading(false);
      setSuccessMessage(response);

      getLogs();
    } catch (error) {
      setError(error as string);
    }

  };

  return (
    <Wrapper>
      <Container>
        <div>
          <SubHeading>Hi, let's send</SubHeading>
          <Heading>Your first notification</Heading>
        </div>

        <Flex>
          <FlexItem flex={1}>
            <HeroSection className="white">
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

                {error && <Alert type="error">{error}</Alert>}
                {successMessage && <Alert type="success">{successMessage}</Alert>}

                <Button onClick={onSubmit}>
                  {isLoading ? 'Sending...' : 'Send'}
                </Button>
              </div>
            </HeroSection>
          </FlexItem>

          <FlexItem flex={1}>
            <SubHeading>Logs</SubHeading>
            <table>
              <thead>
                <tr>
                  <th>Subscriber ID</th>
                  <th>Category</th>
                  <th>Type</th>
                  <th>Message</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {logs.length === 0 ? (
                  <tr>
                    <td className="center" colSpan={5}>No logs</td>
                  </tr>
                ) : null}
                {logs.map((log: NotificationLog, index: number) => (
                  <tr key={index}>
                    <td className="center">
                      {log.userId}
                    </td>
                    <td className="center">
                      {log.category}
                    </td>
                    <td className="center">
                      {log.channel}
                    </td>
                    <td>
                      {log.content}
                    </td>
                    <td className="center" style={{ width: 100 }}>
                      {formatDate(log.timestamp)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FlexItem>
        </Flex>

        <Footer>Developed by Daniel Castillo</Footer>
      </Container>
    </Wrapper>
  );
};

export default FormNotification;
