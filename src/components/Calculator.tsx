import React, {FormEvent, useState} from "react";


export default ({}) => {

    const [ a, setA ] = useState<number|undefined>(undefined);
    const [ b, setB ] = useState<number|undefined>(undefined);
    const [ result, setResult ] = useState<number|undefined>(undefined);
    const [ calculating, isCalculating ] = useState<boolean>(false);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        return new Promise((resolve, _) => {
            isCalculating(true);
            setTimeout(() => resolve(), 2000)
        }).then(() => {
            isCalculating(false);
            if(!a || !b) throw Error("Values can't be null.")
            setResult(a + b)
        })
    }

    return <div className="card mb-5" >
        <div className={"card-header"}>Calculator</div>
        <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">Add shit together</h6>
            <form className="card-text" onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="value1">Number 1</label>
                    <input required={true} type="number" className="form-control" id="value1" aria-describedby="value1Help"
                           placeholder="Enter first number" value={a} onChange={e => setA(parseInt(e.target.value))}/>
                    <small id="value1Help" className="form-text text-muted">Type your first number you want to add</small>
                </div>
                <div className="form-group">
                    <label htmlFor="value2">Number 2</label>
                    <input required={true} type="number" className="form-control" id="value2" aria-describedby="value2Help"
                           placeholder="Enter first number" value={b} onChange={e => setB(parseInt(e.target.value))}/>
                    <small id="value2Help" className="form-text text-muted">Type your second number you want to add</small>
                </div>
                <button type="submit" className="btn btn-primary">Calculate</button>
            </form>
        </div>

        <div className="card-footer text-muted">
            {calculating ? <p>Calculating...</p> : (result ? <p>Result: {result}</p> : null)}
        </div>
    </div>

}