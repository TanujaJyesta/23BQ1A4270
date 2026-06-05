import { Card, CardContent, Typography, Chip } from "@mui/material";

export default function NotificationCard({ data, isNew }) {
  return (
    <Card
      style={{
        marginBottom: 10,
        padding: 10,
        background: isNew ? "#e3f2fd" : "#fff",
        cursor: "pointer",
      }}
    >
      <CardContent>
        <Typography variant="h6">
          {data.title || "No Title"}
        </Typography>

        <Typography variant="body2">
          {data.message || "No Message"}
        </Typography>

        <div style={{ marginTop: 10 }}>
          <Chip label={data.notification_type} color="primary" size="small" />

          {isNew && (
            <Chip
              label="NEW"
              color="success"
              size="small"
              style={{ marginLeft: 8 }}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
}