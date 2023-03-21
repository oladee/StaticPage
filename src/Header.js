import reactjs from './reactjs-icon.svg';
export default function Header(){
    return (
        <>
            <nav>
                <div className="Logo">
                    <img src={reactjs}alt="pageicon"/>
                    <h2>ReactFacts</h2>
                </div>
                <div>
                    <h3>React Course - Project 1</h3>
                </div>
            </nav>
        </>
    )
}