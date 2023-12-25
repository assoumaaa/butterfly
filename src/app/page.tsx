import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main>
      <div>
        Hello World <ModeToggle />
      </div>
      <div>
        <Button variant="outline">Secondary</Button>
      </div>
    </main>
  );
}
