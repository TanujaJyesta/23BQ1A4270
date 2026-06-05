import { useEffect, useState } from "react";
import { fetchNotifications } from "../utils/api";
import NotificationCard from "../components/NotificationCard";
import Link from "next/link";

export default function Priority() {
  const [type, setType] = useState("Event");
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadData();
  }, [type]);

  const loadData = async () => {
    const res = await fetchNotifications(1, 10, type);
    setNotifications(res.notifications || []);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Priority Notifications</h2>

      <Link href="/">Back to Home</Link>

      <div style={{ marginTop: 20 }}>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Event">Event</option>
          <option value="Result">Result</option>
          <option value="Placement">Placement</option>
        </select>
      </div>

      <div style={{ marginTop: 20 }}>
        {notifications.map((n, i) => (
          <NotificationCard key={i} data={n} isNew={false} />
        ))}
      </div>
    </div>
  );
}