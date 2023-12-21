import '../Theme/NotFound.css';
import Button from '@mui/material/Button';

function NotFound() {
    return (
        <div className="container">
            <div className="title">
                <label>Error 404</label>
            </div>
            <div className="errorMessage">
                <label>Oops, I can't find this page...</label>
            </div>
            <div className="explain">
                <label>This page might be removed</label>
            </div>
            <div className="goHome">
                <a href="/home">
                    <Button
                        variant="contained"
                        sx={{ fontSize: "1.5rem", margin: "50px" }}
                    >Return to home</Button>
                </a>
            </div>
        </div>
    )
}

export default NotFound;