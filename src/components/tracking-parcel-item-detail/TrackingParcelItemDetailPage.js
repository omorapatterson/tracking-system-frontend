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
                <div className="tracking-date">
                    { (props.index == props.length - 1) ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-truck"
                                                viewBox="0 0 16 16">
                        <path
                            d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>
                        :
                        (props.index == 0) ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                 className="bi bi-house-check" viewBox="0 0 16 16">
                                <path
                                    d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708L7.293 1.5Z"/>
                                <path
                                    d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.707l.547.547 1.17-1.951a.5.5 0 1 1 .858.514Z"/>
                            </svg>
                            :
                            <img src="https://raw.githubusercontent.com/shajo/portfolio/a02c5579c3ebe185bb1fc085909c582bf5fad802/delivery.svg" className="img-responsive" alt="order-placed"/>
                    }


                </div>
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