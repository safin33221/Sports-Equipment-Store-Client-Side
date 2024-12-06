import { Tooltip as ReactTooltip } from 'react-tooltip'

const TrastedSports = () => {
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold text-center">Your Trusted Sports Partner</h1>
                <p className="font-semibold text-center">Quality Equipment Backed by Performance and Durability</p>
            </div>

            <div>
                <a data-tip data-for='happyFace'> d(`･∀･)b </a>
                <ReactTooltip id='happyFace' type='error'>
                    <span>Show happy face</span>
                </ReactTooltip>
            </div>
        </div>
    );
};

export default TrastedSports;