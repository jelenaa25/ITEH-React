 
 
 import { MdEmail } from 'react-icons/md';
 import { AiFillPhone } from 'react-icons/ai';
 import { TbWorld } from 'react-icons/tb';
 import { SiGooglestreetview } from 'react-icons/si';

 
 

function Kontakt() {
    return (
       
<section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center">
			</div>
			<div className="row justify-content-center">
				<div className="col-lg-10">
					<div className="wrapper">
						<div className="row no-gutters">
							<div className="col-md-6 d-flex align-items-stretch">
								<div className="contact-wrap w-100 p-md-5 p-4 py-5">
									<h3 className="mb-4">Write us</h3>
									<div id="form-message-warning" className="mb-4"></div> 
				      		<div id="form-message-success" className="mb-4">
				            Your message was sent, thank you!
				      		</div>
									<form method="POST" id="contactForm" name="contactForm" className="contactForm">
										<div className="row">
											<div className="col-md-12">
												<div className="form-group">
													<input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
												</div>
											</div>
											<div className="col-md-12"> 
												<div className="form-group">
													<input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<textarea name="message" className="form-control" id="message" cols="30" rows="6" placeholder="Message"></textarea>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<input type="submit" value="Send Message" className="btn btn-primary"/>
													<div className="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="col-md-6 d-flex align-items-stretch">
								<div className="info-wrap w-100 p-md-5 p-4 py-5 img">
									<h3>Contact information</h3>
									
				        	<div className="dbox w-100 d-flex align-items-start">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-map-marker"> <SiGooglestreetview></SiGooglestreetview></span>
				        		</div>
				        		<div className="text pl-3">
					            <p><span>Address: 198 West 21th Street, Suite 721 New York NY 10016</span> </p>
					          </div>
				          </div>
				        	<div className="dbox w-100 d-flex align-items-center">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-phone"><AiFillPhone></AiFillPhone></span>
				        		</div>
				        		<div className="text pl-3">
					            <p><span>Phone:   <a href="tel://1234567920">+ 1235 2355 98 </a></span></p>
					          </div>
				          </div>
				        	<div className="dbox w-100 d-flex align-items-center">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-paper-plane"><MdEmail></MdEmail></span>
				        		</div>
				        		<div className="text pl-3">
					            <p><span>Email: <a href="mailto:info@yoursite.com">info@yoursite.com</a></span> </p>
					          </div>
				          </div>
				        	<div className="dbox w-100 d-flex align-items-center">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-globe"> <TbWorld></TbWorld></span>
				        		</div>
				        		<div className="text pl-3">
					            <p><span>Website <a href="#">yoursite.com</a></span> </p>
					          </div>
				          </div>
			          </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  
       
    );
  }
  
  export default Kontakt;
  