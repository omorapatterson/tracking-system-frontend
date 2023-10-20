import Moment from 'moment';

import '../../assets/css/App.css'
import '../../assets/css/TrackingParcel.css'

export default function TrackingParcelItemDetailPage (props) {

    return (
        <div className="display-flex" key={props.index}>
            <div className="tracking-item-left">
                <div className="tracking-content">
                    { Moment(props.item?.timestamp).format('MMM d, YYYY') }
                    <span>
                        { Moment(props.item?.timestamp).format('hh:mm A') }
                    </span>
                </div>
            </div>
            <div className="tracking-item">
                <div className={`tracking-icon ${props.index == 0? 'status-current blinker' : 'status-intransit'}`}>

                    { (props.index == 0) ? <div className="progress-bar"></div> : ""}
                    { (props.index > 0 && props.index < props.length - 1) ? <div className="progress-bar"></div> : ""}
                    <svg className="svg-inline--fa fa-circle fa-w-16" aria-hidden="true"
                         data-prefix="fas" data-icon="circle" role="img"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                         data-fa-i2svg="">
                        <path fill="currentColor"
                              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                    </svg>
                </div>
                <div className="tracking-date"><img
                    src="https://raw.githubusercontent.com/shajo/portfolio/a02c5579c3ebe185bb1fc085909c582bf5fad802/delivery.svg"
                    className="img-responsive" alt="order-placed"/></div>
                <div className="tracking-content">
                    {
                        props.item.tracking_code_vendor?.tracking_code ?
                        props.item.tracking_code_vendor?.tracking_code?.tracking_code_locales[0].description:
                        props.item.tracking_code?.tracking_code_locales[0].description
                    }
                    <span>
                        {props.item?.location ? props.item?.location + ", " : ""}
                        {props.item?.state ? props.item?.state + ", ": ""}
                        {props.item?.city ? props.item?.city + ", " : ""}
                        {props.item?.country?.isoCode ? props.item?.country?.isoCode : ""}
                    </span>
                </div>
            </div>
        </div>
    )
}