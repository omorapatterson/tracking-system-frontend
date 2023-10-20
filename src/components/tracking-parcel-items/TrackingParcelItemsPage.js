import React, { useState, useEffect  } from 'react';
import TrackingParcelItemDetailPage from '../tracking-parcel-item-detail/TrackingParcelItemDetailPage'

import '../../assets/css/App.css'
import '../../assets/css/TrackingParcel.css'

export default function TrackingParcelItemsPage (props) {

    const [data, setData] = useState('');

    useEffect(() => {
        setData(props.data);
    });

    return (
        <div className="tracking-list">
            {data.parcel_tracking_items?.map(function (item, index) {
                let props = {
                    item: item,
                    index: index,
                    length: data.parcel_tracking_items.length
                }
                return <TrackingParcelItemDetailPage {...props} key={index}/>
            })}
        </div>
    )
}