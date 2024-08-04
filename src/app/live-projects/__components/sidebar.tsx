import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Sidebar() {
    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="min-h-screen w-full"
        >
            <ResizablePanel defaultSize={30}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Sidebar</span>
                </div>
            </ResizablePanel>
            <ResizableHandle withHandle className="bg-cyan-700 dark:bg-cyan-400" />
            <ResizablePanel defaultSize={70}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Content</span>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}
