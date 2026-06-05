import { useEffect, useState } from "react";
import { fetchNotifications } from "../utils/api";
import NotificationCard from "../components/NotificationCard";
import Link from "next/link";

export default function Home() {
  const [notifications, setNotifications] = useState([]);
  const [page, setPage] = useState(1);
  const [viewed, setViewed] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("viewed") || "[]");
    setViewed(stored);
  }, []);

  useEffect(() => {
    loadData();
  }, [page]);

  const loadData = async () => {
    const res = await fetchNotifications(page, 10);
    setNotifications(res.notifications || []);
  };

  const markAsViewed = (id) => {
    const updated = [...viewed, id];
    setViewed(updated);
    localStorage.setItem("viewed", JSON.stringify(updated));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>All Notifications</h2>

      <Link href="/priority">Go to Priority Page</Link>

      <div style={{ marginTop: 20 }}>
        {notifications.map((n, i) => {
          const isNew = !viewed.includes(n.id);

          return (
            <div key={i} onClick={() => markAsViewed(n.id)}>
              <NotificationCard data={n} isNew={isNew} />
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>Page {page}</span>

        <button onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}