import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Content() {
    return (
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel>One</ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel>Two</ResizablePanel>
        </ResizablePanelGroup>
    );
}
