import { SubHeading } from '../../components/ui';
import { formatDate } from '../../utils';

export interface NotificationLog {
  userId: number;
  channel: string;
  category: string;
  content: string;
  timestamp: string;
}

export interface LogsTableProps {
  logs: NotificationLog[];
}

export const LogsTable = ({ logs }: LogsTableProps) => {
  return (
    <>
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
    </>
  );
};