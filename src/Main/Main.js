import Org from './Organization/Org';
import './Main.scss';
import Offer from './Offer/Offer';
import Coordinate from './Coordinate/Coordinate';
import Biom from './Biometrics/Biom';

const Main = () => {
    return (
        <main className='main-container'>
            <Org />
            <Offer />
            <Coordinate />
            <Biom />
        </main>
    );
}
export default Main;