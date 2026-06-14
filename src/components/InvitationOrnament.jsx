import { Leaf, Sparkles } from "lucide-react";

export function InvitationOrnament({ align = "left", className = "" }) {
  return (
    <div
      className={`invitation-ornament invitation-ornament-${align} ${className}`}
      aria-hidden="true"
    >
      <Leaf className="ornament-leaf ornament-leaf-start" size={16} />
      <span className="ornament-line" />
      <Sparkles className="ornament-spark" size={14} />
      <span className="ornament-line" />
      <Leaf className="ornament-leaf ornament-leaf-end" size={16} />
    </div>
  );
}
