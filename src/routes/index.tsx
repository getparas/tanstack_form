import { createFileRoute } from "@tanstack/react-router";
import { BugReportForm } from "@/components/forms/bug-report-form";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div className="grid place-items-center h-screen mx-4">
			<BugReportForm />
		</div>
	);
}
