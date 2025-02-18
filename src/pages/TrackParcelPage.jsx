import { useParams } from 'react-router';

export default function TrackParcelPage() {
    const { Parcel_id } = useParams();

    console.log(Parcel_id);

    return (
        <div>
            <h1>{Parcel_id}</h1>
        </div>
    );
}
