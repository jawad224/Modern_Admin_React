import React ,{useState}from 'react'

const Dashboardecommerce = () => {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(!isHovering);
        console.log("i am running")
      };
    return (

        
        <div class="app-content content">
            <div class="content-wrapper">
                <div class="content-header row">
                </div>
                <div class="content-body">
                    <h1
                       className={isHovering ? 'bg-salmon' : ''}
                       onMouseOver={handleMouseOver}
                    //    onMouseOut={setIsHovering(!isHovering)}
                    >hello baloch</h1>



                    {/* eCommerce statistic */}
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-12">
                            <div className="card pull-up">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex">
                                            <div className="media-body text-left">
                                                <h3 className="info">850</h3>
                                                <h6>Products Sold</h6>
                                            </div>
                                            <div>
                                                <i className="icon-basket-loaded info font-large-2 float-right" />
                                            </div>
                                        </div>
                                        <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                            <div className="progress-bar bg-gradient-x-info" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12">
                            <div className="card pull-up">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex">
                                            <div className="media-body text-left">
                                                <h3 className="warning">$748</h3>
                                                <h6>Net Profit</h6>
                                            </div>
                                            <div>
                                                <i className="icon-pie-chart warning font-large-2 float-right" />
                                            </div>
                                        </div>
                                        <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                            <div className="progress-bar bg-gradient-x-warning" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12">
                            <div className="card pull-up">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex">
                                            <div className="media-body text-left">
                                                <h3 className="success">146</h3>
                                                <h6>New Customers</h6>
                                            </div>
                                            <div>
                                                <i className="icon-user-follow success font-large-2 float-right" />
                                            </div>
                                        </div>
                                        <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                            <div className="progress-bar bg-gradient-x-success" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12">
                            <div className="card pull-up">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="media d-flex">
                                            <div className="media-body text-left">
                                                <h3 className="danger">99.89 %</h3>
                                                <h6>Customer Satisfaction</h6>
                                            </div>
                                            <div>
                                                <i className="icon-heart danger font-large-2 float-right" />
                                            </div>
                                        </div>
                                        <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                            <div className="progress-bar bg-gradient-x-danger" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/ eCommerce statistic */}
                    {/* Products sell and New Orders */}
                    <div className="row match-height">
                        <div className="col-xl-8 col-12" id="ecommerceChartView">
                            <div className="card card-shadow">
                                <div className="card-header card-header-transparent py-20">
                                    <div className="btn-group dropdown">
                                        <a href="#" className="text-body dropdown-toggle blue-grey-700" data-toggle="dropdown">PRODUCTS SALES</a>
                                        <div className="dropdown-menu animate" role="menu">
                                            <a className="dropdown-item" href="#" role="menuitem">Sales</a>
                                            <a className="dropdown-item" href="#" role="menuitem">Total sales</a>
                                            <a className="dropdown-item" href="#" role="menuitem">profit</a>
                                        </div>
                                    </div>
                                    <ul className="nav nav-pills nav-pills-rounded chart-action float-right btn-group" role="group">
                                        <li className="nav-item"><a className="active nav-link" data-toggle="tab" href="#scoreLineToDay">Day</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#scoreLineToWeek">Week</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#scoreLineToMonth">Month</a></li>
                                    </ul>
                                </div>
                                <div className="widget-content tab-content bg-white p-20">
                                    <div className="ct-chart tab-pane active scoreLineShadow" id="scoreLineToDay" />
                                    <div className="ct-chart tab-pane scoreLineShadow" id="scoreLineToWeek" />
                                    <div className="ct-chart tab-pane scoreLineShadow" id="scoreLineToMonth" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">New Orders</h4>
                                    <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                                    <div className="heading-elements">
                                        <ul className="list-inline mb-0">
                                            <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div id="new-orders" className="media-list position-relative">
                                        <div className="table-responsive">
                                            <table id="new-orders-table" className="table table-hover table-xl mb-0">
                                                <thead>
                                                    <tr>
                                                        <th className="border-top-0">Product</th>
                                                        <th className="border-top-0">Customers</th>
                                                        <th className="border-top-0">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="text-truncate">iPhone X</td>
                                                        <td className="text-truncate p-1">
                                                            <ul className="list-unstyled users-list m-0">
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="John Doe" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-19.png" alt="Avatar" />
                                                                </li>
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Katherine Nichols" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-18.png" alt="Avatar" />
                                                                </li>
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Joseph Weaver" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-17.png" alt="Avatar" />
                                                                </li>
                                                                <li className="avatar avatar-sm">
                                                                    <span className="badge badge-info">+4 more</span>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td className="text-truncate">$8999</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-truncate">Pixel 2</td>
                                                        <td className="text-truncate p-1">
                                                            <ul className="list-unstyled users-list m-0">
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Alice Scott" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-16.png" alt="Avatar" />
                                                                </li>
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Charles Miller" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-15.png" alt="Avatar" />
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td className="text-truncate">$5550</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-truncate">OnePlus</td>
                                                        <td className="text-truncate p-1">
                                                            <ul className="list-unstyled users-list m-0">
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Christine Ramos" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-11.png" alt="Avatar" />
                                                                </li>
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Thomas Brewer" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-10.png" alt="Avatar" />
                                                                </li>
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Alice Chapman" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-9.png" alt="Avatar" />
                                                                </li>
                                                                <li className="avatar avatar-sm">
                                                                    <span className="badge badge-info">+3 more</span>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td className="text-truncate">$9000</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-truncate">Galaxy</td>
                                                        <td className="text-truncate p-1">
                                                            <ul className="list-unstyled users-list m-0">
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Ryan Schneider" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-14.png" alt="Avatar" />
                                                                </li>
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Tiffany Oliver" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-13.png" alt="Avatar" />
                                                                </li>
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Joan Reid" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-12.png" alt="Avatar" />
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td className="text-truncate">$7500</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-truncate">Moto Z2</td>
                                                        <td className="text-truncate p-1">
                                                            <ul className="list-unstyled users-list m-0">
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Kimberly Simmons" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-8.png" alt="Avatar" />
                                                                </li>
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Willie Torres" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-7.png" alt="Avatar" />
                                                                </li>
                                                                <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Rebecca Jones" className="avatar avatar-sm pull-up">
                                                                    <img className="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-6.png" alt="Avatar" />
                                                                </li>
                                                                <li className="avatar avatar-sm">
                                                                    <span className="badge badge-info">+1 more</span>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td className="text-truncate">$8500</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/ Products sell and New Orders */}
                    {/* Recent Transactions */}
                    <div className="row">
                        <div id="recent-transactions" className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Recent Transactions</h4>
                                    <a className="heading-elements-toggle"><i className="la la-ellipsis-v font-medium-3" /></a>
                                    <div className="heading-elements">
                                        <ul className="list-inline mb-0">
                                            <li><a className="btn btn-sm btn-danger box-shadow-2 round btn-min-width pull-right" href="invoice-summary.html" target="_blank">Invoice Summary</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="table-responsive">
                                        <table id="recent-orders" className="table table-hover table-xl mb-0">
                                            <thead>
                                                <tr>
                                                    <th className="border-top-0">Status</th>
                                                    <th className="border-top-0">Invoice#</th>
                                                    <th className="border-top-0">Customer Name</th>
                                                    <th className="border-top-0">Products</th>
                                                    <th className="border-top-0">Categories</th>
                                                    <th className="border-top-0">Shipping</th>
                                                    <th className="border-top-0">Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-truncate"><i className="la la-dot-circle-o success font-medium-1 mr-1" />                          Paid</td>
                                                    <td className="text-truncate"><a href="#">INV-001001</a></td>
                                                    <td className="text-truncate">
                                                        <span className="avatar avatar-xs">
                                                            <img className="box-shadow-2" src="../../../app-assets/images/portrait/small/avatar-s-4.png" alt="avatar" />
                                                        </span>
                                                        <span>Elizabeth W.</span>
                                                    </td>
                                                    <td className="text-truncate p-1">
                                                        <ul className="list-unstyled users-list m-0">
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Kimberly Simmons" className="avatar avatar-sm pull-up">
                                                                <img className="media-object rounded-circle no-border-top-radius no-border-bottom-radius" src="../../../app-assets/images/portfolio/portfolio-1.jpg" alt="Avatar" />
                                                            </li>
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Willie Torres" className="avatar avatar-sm pull-up">
                                                                <img className="media-object rounded-circle no-border-top-radius no-border-bottom-radius" src="../../../app-assets/images/portfolio/portfolio-2.jpg" alt="Avatar" />
                                                            </li>
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Rebecca Jones" className="avatar avatar-sm pull-up">
                                                                <img className="media-object rounded-circle no-border-top-radius no-border-bottom-radius" src="../../../app-assets/images/portfolio/portfolio-4.jpg" alt="Avatar" />
                                                            </li>
                                                            <li className="avatar avatar-sm">
                                                                <span className="badge badge-info">+1 more</span>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-sm btn-outline-danger round">Food</button>
                                                    </td>
                                                    <td>
                                                        <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                                            <div className="progress-bar bg-gradient-x-danger" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </td>
                                                    <td className="text-truncate">$ 1200.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-truncate"><i className="la la-dot-circle-o danger font-medium-1 mr-1" />                          Declined</td>
                                                    <td className="text-truncate"><a href="#">INV-001002</a></td>
                                                    <td className="text-truncate">
                                                        <span className="avatar avatar-xs">
                                                            <img className="box-shadow-2" src="../../../app-assets/images/portrait/small/avatar-s-5.png" alt="avatar" />
                                                        </span>
                                                        <span>Doris R.</span>
                                                    </td>
                                                    <td className="text-truncate p-1">
                                                        <ul className="list-unstyled users-list m-0">
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Kimberly Simmons" className="avatar avatar-sm pull-up">
                                                                <img className="media-object rounded-circle no-border-top-radius no-border-bottom-radius" src="../../../app-assets/images/portfolio/portfolio-5.jpg" alt="Avatar" />
                                                            </li>
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Willie Torres" className="avatar avatar-sm pull-up">
                                                                <img className="media-object rounded-circle no-border-top-radius no-border-bottom-radius" src="../../../app-assets/images/portfolio/portfolio-6.jpg" alt="Avatar" />
                                                            </li>
                                                            <li className="avatar avatar-sm">
                                                                <span className="badge badge-info">+2 more</span>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-sm btn-outline-warning round">Electronics</button>
                                                    </td>
                                                    <td>
                                                        <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                                            <div className="progress-bar bg-gradient-x-warning" role="progressbar" style={{ width: '45%' }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </td>
                                                    <td className="text-truncate">$ 1850.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-truncate"><i className="la la-dot-circle-o warning font-medium-1 mr-1" />                          Pending</td>
                                                    <td className="text-truncate"><a href="#">INV-001003</a></td>
                                                    <td className="text-truncate">
                                                        <span className="avatar avatar-xs">
                                                            <img className="box-shadow-2" src="../../../app-assets/images/portrait/small/avatar-s-6.png" alt="avatar" />
                                                        </span>
                                                        <span>Megan S.</span>
                                                    </td>
                                                    <td className="text-truncate p-1">
                                                        <ul className="list-unstyled users-list m-0">
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Kimberly Simmons" className="avatar avatar-sm pull-up">
                                                                <img className="media-object rounded-circle no-border-top-radius no-border-bottom-radius" src="../../../app-assets/images/portfolio/portfolio-2.jpg" alt="Avatar" />
                                                            </li>
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Willie Torres" className="avatar avatar-sm pull-up">
                                                                <img className="media-object rounded-circle no-border-top-radius no-border-bottom-radius" src="../../../app-assets/images/portfolio/portfolio-5.jpg" alt="Avatar" />
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-sm btn-outline-success round">Groceries</button>
                                                    </td>
                                                    <td>
                                                        <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                                            <div className="progress-bar bg-gradient-x-success" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </td>
                                                    <td className="text-truncate">$ 3200.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-truncate"><i className="la la-dot-circle-o success font-medium-1 mr-1" />                          Paid</td>
                                                    <td className="text-truncate"><a href="#">INV-001004</a></td>
                                                    <td className="text-truncate">
                                                        <span className="avatar avatar-xs">
                                                            <img className="box-shadow-2" src="../../../app-assets/images/portrait/small/avatar-s-7.png" alt="avatar" />
                                                        </span>
                                                        <span>Andrew D.</span>
                                                    </td>
                                                    <td className="text-truncate p-1">
                                                        <ul className="list-unstyled users-list m-0">
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Kimberly Simmons" className="avatar avatar-sm pull-up">
                                                                <img className="media-object rounded-circle no-border-top-radius no-border-bottom-radius" src="../../../app-assets/images/portfolio/portfolio-6.jpg" alt="Avatar" />
                                                            </li>
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Willie Torres" className="avatar avatar-sm pull-up">
                                                                <img className="media-object rounded-circle no-border-top-radius no-border-bottom-radius" src="../../../app-assets/images/portfolio/portfolio-1.jpg" alt="Avatar" />
                                                            </li>
                                                            <li className="avatar avatar-sm">
                                                                <span className="badge badge-info">+1 more</span>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-sm btn-outline-info round">Apparels</button>
                                                    </td>
                                                    <td>
                                                        <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                                            <div className="progress-bar bg-gradient-x-info" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </td>
                                                    <td className="text-truncate">$ 4500.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-truncate"><i className="la la-dot-circle-o success font-medium-1 mr-1" />                          Paid</td>
                                                    <td className="text-truncate"><a href="#">INV-001005</a></td>
                                                    <td className="text-truncate">
                                                        <span className="avatar avatar-xs">
                                                            <img className="box-shadow-2" src="../../../app-assets/images/portrait/small/avatar-s-9.png" alt="avatar" />
                                                        </span>
                                                        <span>Walter R.</span>
                                                    </td>
                                                    <td className="text-truncate p-1">
                                                        <ul className="list-unstyled users-list m-0">
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Kimberly Simmons" className="avatar avatar-sm pull-up">
                                                                <img className="media-object rounded-circle no-border-top-radius no-border-bottom-radius" src="../../../app-assets/images/portfolio/portfolio-5.jpg" alt="Avatar" />
                                                            </li>
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Willie Torres" className="avatar avatar-sm pull-up">
                                                                <img className="media-object rounded-circle no-border-top-radius no-border-bottom-radius" src="../../../app-assets/images/portfolio/portfolio-3.jpg" alt="Avatar" />
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <button type="button" className="btn btn-sm btn-outline-danger round">Food</button>
                                                    </td>
                                                    <td>
                                                        <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                                            <div className="progress-bar bg-gradient-x-danger" role="progressbar" style={{ width: '35%' }} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </td>
                                                    <td className="text-truncate">$ 1500.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/ Recent Transactions */}
                    {/*Recent Orders & Monthly Sales */}
                    <div className="row match-height">
                        <div className="col-xl-8 col-lg-12">
                            <div className="card">
                                <div className="card-content ">
                                    <div id="cost-revenue" className="height-250 position-relative" />
                                </div>
                                <div className="card-footer">
                                    <div className="row mt-1">
                                        <div className="col-3 text-center">
                                            <h6 className="text-muted">Total Products</h6>
                                            <h2 className="block font-weight-normal">18.6 k</h2>
                                            <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                                <div className="progress-bar bg-gradient-x-info" role="progressbar" style={{ width: '70%' }} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                        <div className="col-3 text-center">
                                            <h6 className="text-muted">Total Sales</h6>
                                            <h2 className="block font-weight-normal">64.54 M</h2>
                                            <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                                <div className="progress-bar bg-gradient-x-warning" role="progressbar" style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                        <div className="col-3 text-center">
                                            <h6 className="text-muted">Total Cost</h6>
                                            <h2 className="block font-weight-normal">24.38 B</h2>
                                            <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                                <div className="progress-bar bg-gradient-x-danger" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                        <div className="col-3 text-center">
                                            <h6 className="text-muted">Total Revenue</h6>
                                            <h2 className="block font-weight-normal">36.72 M</h2>
                                            <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
                                                <div className="progress-bar bg-gradient-x-success" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-12">
                            <div className="card">
                                <div className="card-content">
                                    <div className="card-body sales-growth-chart">
                                        <div id="monthly-sales" className="height-250" />
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="chart-title mb-1 text-center">
                                        <h6>Total monthly Sales.</h6>
                                    </div>
                                    <div className="chart-stats text-center">
                                        <a href="#" className="btn btn-sm btn-danger box-shadow-2 mr-1">Statistics <i className="ft-bar-chart" /></a>
                                        <span className="text-muted">for the last year.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/Recent Orders & Monthly Sales */}
                    {/* Basic Horizontal Timeline */}
                    <div className="row match-height">
                        <div className="col-xl-4 col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Basic Card</h4>
                                </div>
                                <div className="card-content">
                                    <img className="img-fluid" src="../../../app-assets/images/carousel/05.jpg" alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up
                                            the bulk of the card's content.</p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                </div>
                                <div className="card-footer border-top-blue-grey border-top-lighten-5 text-muted">
                                    <span className="float-left">3 hours ago</span>
                                    <span className="float-right">
                                        <a href="#" className="card-link">Read More <i className="fa fa-angle-right" /></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Horizontal Timeline</h4>
                                    <a className="heading-elements-toggle"><i className="fa fa-ellipsis-v font-medium-3" /></a>
                                    <div className="heading-elements">
                                        <ul className="list-inline mb-0">
                                            <li><a data-action="reload"><i className="ft-rotate-cw" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="card-text">
                                            <section className="cd-horizontal-timeline">
                                                <div className="timeline">
                                                    <div className="events-wrapper">
                                                        <div className="events">
                                                            <ol>
                                                                <li><a href="#0" data-date="16/01/2015" className="selected">16 Jan</a></li>
                                                                <li><a href="#0" data-date="28/02/2015">28 Feb</a></li>
                                                                <li><a href="#0" data-date="20/04/2015">20 Mar</a></li>
                                                                <li><a href="#0" data-date="20/05/2015">20 May</a></li>
                                                                <li><a href="#0" data-date="09/07/2015">09 Jul</a></li>
                                                                <li><a href="#0" data-date="30/08/2015">30 Aug</a></li>
                                                                <li><a href="#0" data-date="15/09/2015">15 Sep</a></li>
                                                            </ol>
                                                            <span className="filling-line" aria-hidden="true" />
                                                        </div>
                                                        {/* .events */}
                                                    </div>
                                                    {/* .events-wrapper */}
                                                    <ul className="cd-timeline-navigation">
                                                        <li><a href="#0" className="prev inactive">Prev</a></li>
                                                        <li><a href="#0" className="next">Next</a></li>
                                                    </ul>
                                                    {/* .cd-timeline-navigation */}
                                                </div>
                                                {/* .timeline */}
                                                <div className="events-content">
                                                    <ol>
                                                        <li className="selected" data-date="16/01/2015">
                                                            <blockquote className="blockquote border-0">
                                                                <div className="media">
                                                                    <div className="media-left">
                                                                        <img className="media-object img-xl mr-1" src="../../../app-assets/images/portrait/small/avatar-s-5.png" alt="Generic placeholder image" />
                                                                    </div>
                                                                    <div className="media-body">
                                                                        Sometimes life is going to hit you in the head with a brick. Don't lose faith.
                                                                    </div>
                                                                </div>
                                                                <footer className="blockquote-footer text-right">Steve Jobs
                                                                    <cite title="Source Title">Entrepreneur</cite>
                                                                </footer>
                                                            </blockquote>
                                                            <p className="lead mt-2">
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                                fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                                aspernatur at.
                                                            </p>
                                                        </li>
                                                        <li data-date="28/02/2015">
                                                            <blockquote className="blockquote border-0">
                                                                <div className="media">
                                                                    <div className="media-left">
                                                                        <img className="media-object img-xl mr-1" src="../../../app-assets/images/portrait/small/avatar-s-6.png" alt="Generic placeholder image" />
                                                                    </div>
                                                                    <div className="media-body">
                                                                        Sometimes life is going to hit you in the head with a brick. Don't lose faith.
                                                                    </div>
                                                                </div>
                                                                <footer className="blockquote-footer text-right">Steve Jobs
                                                                    <cite title="Source Title">Entrepreneur</cite>
                                                                </footer>
                                                            </blockquote>
                                                            <p className="lead mt-2">
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                                fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                                aspernatur at.
                                                            </p>
                                                        </li>
                                                        <li data-date="20/04/2015">
                                                            <blockquote className="blockquote border-0">
                                                                <div className="media">
                                                                    <div className="media-left">
                                                                        <img className="media-object img-xl mr-1" src="../../../app-assets/images/portrait/small/avatar-s-7.png" alt="Generic placeholder image" />
                                                                    </div>
                                                                    <div className="media-body">
                                                                        Sometimes life is going to hit you in the head with a brick. Don't lose faith.
                                                                    </div>
                                                                </div>
                                                                <footer className="blockquote-footer text-right">Steve Jobs
                                                                    <cite title="Source Title">Entrepreneur</cite>
                                                                </footer>
                                                            </blockquote>
                                                            <p className="lead mt-2">
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                                fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                                aspernatur at.
                                                            </p>
                                                        </li>
                                                        <li data-date="20/05/2015">
                                                            <blockquote className="blockquote border-0">
                                                                <div className="media">
                                                                    <div className="media-left">
                                                                        <img className="media-object img-xl mr-1" src="../../../app-assets/images/portrait/small/avatar-s-8.png" alt="Generic placeholder image" />
                                                                    </div>
                                                                    <div className="media-body">
                                                                        Sometimes life is going to hit you in the head with a brick. Don't lose faith.
                                                                    </div>
                                                                </div>
                                                                <footer className="blockquote-footer text-right">Steve Jobs
                                                                    <cite title="Source Title">Entrepreneur</cite>
                                                                </footer>
                                                            </blockquote>
                                                            <p className="lead mt-2">
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                                fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                                aspernatur at.
                                                            </p>
                                                        </li>
                                                        <li data-date="09/07/2015">
                                                            <blockquote className="blockquote border-0">
                                                                <div className="media">
                                                                    <div className="media-left">
                                                                        <img className="media-object img-xl mr-1" src="../../../app-assets/images/portrait/small/avatar-s-9.png" alt="Generic placeholder image" />
                                                                    </div>
                                                                    <div className="media-body">
                                                                        Sometimes life is going to hit you in the head with a brick. Don't lose faith.
                                                                    </div>
                                                                </div>
                                                                <footer className="blockquote-footer text-right">Steve Jobs
                                                                    <cite title="Source Title">Entrepreneur</cite>
                                                                </footer>
                                                            </blockquote>
                                                            <p className="lead mt-2">
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                                fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                                aspernatur at.
                                                            </p>
                                                        </li>
                                                        <li data-date="30/08/2015">
                                                            <blockquote className="blockquote border-0">
                                                                <div className="media">
                                                                    <div className="media-left">
                                                                        <img className="media-object img-xl mr-1" src="../../../app-assets/images/portrait/small/avatar-s-6.png" alt="Generic placeholder image" />
                                                                    </div>
                                                                    <div className="media-body">
                                                                        Sometimes life is going to hit you in the head with a brick. Don't lose faith.
                                                                    </div>
                                                                </div>
                                                                <footer className="blockquote-footer text-right">Steve Jobs
                                                                    <cite title="Source Title">Entrepreneur</cite>
                                                                </footer>
                                                            </blockquote>
                                                            <p className="lead mt-2">
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                                fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                                aspernatur at.
                                                            </p>
                                                        </li>
                                                        <li data-date="15/09/2015">
                                                            <blockquote className="blockquote border-0">
                                                                <div className="media">
                                                                    <div className="media-left">
                                                                        <img className="media-object img-xl mr-1" src="../../../app-assets/images/portrait/small/avatar-s-7.png" alt="Generic placeholder image" />
                                                                    </div>
                                                                    <div className="media-body">
                                                                        Sometimes life is going to hit you in the head with a brick. Don't lose faith.
                                                                    </div>
                                                                </div>
                                                                <footer className="blockquote-footer text-right">Steve Jobs
                                                                    <cite title="Source Title">Entrepreneur</cite>
                                                                </footer>
                                                            </blockquote>
                                                            <p className="lead mt-2">
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia,
                                                                fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur
                                                                aspernatur at.
                                                            </p>
                                                        </li>
                                                    </ol>
                                                </div>
                                                {/* .events-content */}
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/ Basic Horizontal Timeline */}

                </div>
            </div>
        </div>
    )
}

export default Dashboardecommerce