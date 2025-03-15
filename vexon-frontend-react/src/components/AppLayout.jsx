import Header from './Header';
import Footer from './Footer';


const AppLayout = ({ children }) => {

    return (
        <div className='flex flex-col'>
            <Header />
            {children}
            <Footer />
        </div>
    )
};

export default AppLayout;