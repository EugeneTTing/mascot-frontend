import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page"
            style={{
                width: "100%",
                height: "100wh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexFlow: "column nowrap"
            }}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}