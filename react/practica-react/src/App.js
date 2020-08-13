import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Stats from './components/Stats'
import Panel from './components/Panel'
import Category from './components/Category'
import DataTable from './components/DataTable'
import Footer from './components/Footer'

const categories = [1, 2, 3, 4, 5, 6]

function App() {
    return (
        <div className="App">
           
            <div id="wrapper">

                {/* <!-- Sidebar --> */}
                <Sidebar/>
                {/* <!-- End of Sidebar --> */}

                {/* <!-- Content Wrapper --> */}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/* <!-- Main Content --> */}
                    <div id="content">

                        {/* <!-- Topbar --> */}
                        <Topbar/>
                        {/* <!-- End of Topbar --> */}

                        {/* <!-- Begin Page Content --> */}
                        <div className="container-fluid">

                            {/* <!-- Page Heading --> */}
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                            </div>

                            {/* <!-- Content Row --> */}
                            <div className="row">
                                <Stats/>
                            </div>

                            {/* <!-- Content Row --> */}
                            <div className="row">
                                {/* <!-- Last Product in DB --> */}
                                <Panel title='Last product in Data Dase'>
                                    <div className="text-center">
                                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src="images/product_dummy.svg" alt="dummy-img" />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                                    <a target="_blank" rel="nofollow" href="/">View product detail</a>
                                </Panel>

                                {/* <!-- Categories in DB --> */}
                                <Panel title='Categories in Data Base'>
                                    <div className="row">
                                        { categories.map((category, i) => <Category key={i} data={category} />) }
                                    </div>
                                </Panel>

                            </div>
                        </div>
                        {/* <!-- DataTables Example --> */}
                        <DataTable/>
                        {/* <!-- /.container-fluid --> */}
                    </div>
                    {/* <!-- End of Main Content --> */}

                    {/* <!-- Footer --> */}
                    <Footer/>
                    {/* <!-- End of Footer --> */}

                </div>
                {/* <!-- End of Content Wrapper --> */}

            </div>
            {/* <!-- End of Page Wrapper --> */}
            
        </div>
    );
}

export default App;
