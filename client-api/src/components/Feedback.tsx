import Alert from "@mui/material/Alert";

export default function Feedback({
  status,
  success,
  display,
}: {
  status: string;
  success: boolean;
  display: boolean;
}) {
  if (!display) return <></>;
  return <Alert severity={success ? "success" : "error"}>{status}</Alert>;
}
