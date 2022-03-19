import dayjs from 'dayjs';
import { MdEdit, MdDelete } from 'react-icons/md';
import { Reminder } from '../../../types/Remider';

import { IconButton } from '../../IconButton';

interface IProps {
  reminder: Reminder;
  handleDelete: () => void;
  handleEdit: () => void;
}

export const RemiderCard = ({ reminder, handleDelete, handleEdit }: IProps) => {
  return (
    <div
      className={`w-full h-28 p-4 text-white flex flex-col justify-between rounded-md ${reminder.color}`}
    >
      <div>
        <span className="block font-medium opacity-95">{reminder.title}</span>
        <span className="block text-sm opacity-75">
          {dayjs(reminder.date).format('MM/DD/YYYY - HH:mm')}
        </span>
      </div>
      <div className="flex justify-end gap-2">
        <IconButton icon={MdEdit} onClick={handleEdit} size="1.5rem" />
        <IconButton icon={MdDelete} onClick={handleDelete} size="1.5rem" />
      </div>
    </div>
  );
};
