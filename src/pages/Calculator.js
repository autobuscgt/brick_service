
function Calculator() {
    return (
        <div className='calculator-container'>
            <h1>Калькулятор продукции</h1>
            <form>
                <ul>
                    <li><input placeholder="" type=""/></li>
                    <li><input placeholder="" type=""/></li>
                    <li><input placeholder="" type=""/></li>
                    <li><input placeholder="" type=""/></li>
                    <li> <button>Рассчитать стоимость</button> </li>
                </ul>
            </form>
        </div>
    );
}

export default Calculator;