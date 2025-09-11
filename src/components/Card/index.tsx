import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CircleCheckBig } from 'lucide-react';

export default function CardAbout() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between p-24">
        <Card className="w-[350px] max-w-sm">
        <CardHeader>
            <CardTitle>Consultoria Técnica</CardTitle>
            <CardDescription>
                Análise e desenvolvimento de soluções tecnológicas para empresas.
            </CardDescription>
            {/* <CardAction>
            <Button variant="link">Sign Up</Button>
            </CardAction> */}
        </CardHeader>
        <CardContent className="flex ">
            <CardContent className="grid gap-2">
                <CircleCheckBig />
                <CircleCheckBig />
                <CircleCheckBig />
            </CardContent>
            <CardContent className="grid gap-2">
                <CardTitle>Consultoria Técnica</CardTitle>
                <CardTitle>Consultoria Técnica</CardTitle>
                <CardTitle>Consultoria Técnica</CardTitle>
            </CardContent>
        </CardContent>
        <CardFooter className="flex-col gap-2">
            {/* <Button type="submit" className="w-full">
            Login
            </Button>
            <Button variant="outline" className="w-full">
            Login with Google
            </Button> */}
        </CardFooter>
        </Card>`
    </main>
  )
}
