interface Props{
    name: string;
    email: string;
    age: number;
    isMarried : boolean;
    friends: string[];
    country: Country,
}

export enum Country {
    nepal = "nepal",
    america = "america",
    dubai = "dubai",
}

export const Person = (props: Props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Age: {props.age}</h1>
            <h1>This Person is {props.isMarried ? "is" : "not"} Married</h1>
            {props.friends.map((friends: string) => (
                <h1>{friends}</h1>
                
            ))}
            <h1>{props.country}</h1>
        </div>
    );
};