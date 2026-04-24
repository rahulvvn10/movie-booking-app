import { useDispatch, useSelector } from 'react-redux';
import '../styles/TheatreDetails.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTheatre } from '../actions/theatreActions';

function TheatreDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { theatre, error, loading } = useSelector(
    state => state.theatres
  );

  useEffect(() => {
    dispatch(getTheatre(id));
  }, [dispatch, id]);

  /* 🔄 Loading state */
  if (loading) {
    return <p className="loading">Loading theatre details...</p>;
  }

  /* ❌ Error state */
  if (error) {
    return <p className="error">{error}</p>;
  }

  /* ❌ No data */
  if (!theatre) {
    return <p className="error">Theatre details not available</p>;
  }

  return (
    <div className="theatre-details">

      {/* Image Section */}
      <div className="theatre-image">
        <img src={theatre.image} alt={theatre.name} />
      </div>

      {/* Info Section */}
      <div className="theatre-info">
        <h1 className="theatre-name">{theatre.name}</h1>
        <p className="theatre-description">{theatre.description}</p>

        <div className="theatre-meta">
          <p><strong>📍 Location:</strong> {theatre.location}</p>
          <p><strong>🎬 Screens:</strong> {theatre.screens}</p>
          <p>
            <strong>🅿 Parking:</strong>
            {theatre.parkingAvailable ? ' Available' : ' Not Available'}
          </p>
        </div>

        {/* Facilities */}
        {theatre.facilities && theatre.facilities.length > 0 && (
          <div className="theatre-facilities">
            <h3>Facilities</h3>
            <ul>
              {theatre.facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

    </div>
  );
}

export default TheatreDetails;
