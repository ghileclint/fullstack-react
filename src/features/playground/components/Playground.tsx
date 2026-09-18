import { UserProfile } from "../../profile/components/UserProfile";
import { Card } from "../../../components/Card";

export function Playground() {
  return (
    <div className="p-8 flex gap-8">
      <UserProfile
        name="Michael Clinton"
        avatarUrl="https://github.com/ghileclint.png"
        role="Architect"
        isAdmin={true}
      />

      <UserProfile
        name="AI Assistant"
        avatarUrl="https://ui-avatars.com/api/?name=AI&background=random"
        role="Junior Developer"
      />

      <Card title="System Status">
        <p className="text-gray-600">All systems operational.</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
          Run Diagnostics
        </button>
      </Card>
    </div>
  );
}
