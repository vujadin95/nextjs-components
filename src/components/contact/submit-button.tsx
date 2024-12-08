import { Button } from "../ui/button";
import { Loader } from "lucide-react";

interface SubmitButtonProps {
  label: string;
  pending: boolean;
}

const SubmitButton = ({ label, pending }: SubmitButtonProps) => {
  return (
    <Button type="submit" disabled={pending} className="border">
      {pending && <Loader className="animate-spin" />}
      {label}
    </Button>
  );
};

export default SubmitButton;
