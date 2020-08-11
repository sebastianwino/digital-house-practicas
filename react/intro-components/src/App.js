import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Static from './components/Static'
import Category from './components/Category'
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
                <div id="content-wrapper" class="d-flex flex-column">

                    {/* <!-- Main Content --> */}
                    <div id="content">

                        {/* <!-- Topbar --> */}
                        <Topbar/>
                        {/* <!-- End of Topbar --> */}

                        {/* <!-- Begin Page Content --> */}
                        <div class="container-fluid">

                            {/* <!-- Page Heading --> */}
                            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
                            </div>

                            {/* <!-- Content Row --> */}
                            <div class="row">
                                {/* <!-- Amount of Products in DB --> */}
                                <Static color="primary" title="Products in Data Base" number="135" icon="clipboard-list" />

                                {/* <!-- $$$ of all products in DB --> */}
                                <Static color="success" title="Amount in products" number="$546.456" icon="dollar-sign" />

                                {/* <!-- Amount of users in DB --> */}
                                <Static color="warning" title="Users quantity" number="38" icon="user-check" />
                            </div>

                            {/* <!-- Content Row --> */}
                            <div class="row">
                                {/* <!-- Last Product in DB --> */}
                                <div class="col-lg-6 mb-4">
                                    <div class="card shadow mb-4">
                                        <div class="card-header py-3">
                                            <h6 class="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                                        </div>
                                        <div class="card-body">
                                            <div class="text-center">
                                                <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style= {{width: "25rem"}} src="images/product_dummy.svg" alt="image dummy" />
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                                            <a target="_blank" rel="nofollow" href="/">View product detail</a>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Categories in DB --> */}
                                <div class="col-lg-6 mb-4">						
                                    <div class="card shadow mb-4">
                                        <div class="card-header py-3">
                                            <h6 class="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                                        </div>
                                        <div class="card-body">
                                            <div class="row">
                                                <Category categories={categories} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
