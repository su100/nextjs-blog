import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

function formatDate(date) {
  if (!date) return;
  const d = new Date(date);
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000;

  if (diff < 60 * 1) {
    // 1분 미만
    return '방금 전';
  }
  if (diff < 60 * 60 * 24 * 3) {
    // 3일 미만: 몇시간 전, 몇일 전
    return formatDistanceToNow(d, { addSuffix: true, locale: ko });
  }
  return format(d, 'PPP EEE p', { locale: ko }); // PPP: 날짜, EEE: 요일, p: 시간
}

export default function FormatDate({ dateString }) {
  return <time dateTime={dateString}>{formatDate(dateString)}</time>;
}
