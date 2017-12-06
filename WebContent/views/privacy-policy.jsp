<%@taglib prefix="s" uri="/struts-tags"%>
<div class="iamge">
	<img alt="privacty policy" src="images/privacy-policy1.jpg"
		class="img-responsive" style="width: 100%; height: 35vh">
</div>

<article class="container articStyle">



	<div class="policy clearfix">
		<h1 class="privacypolicy">Privacy Policy</h1>

		<p class="linespaceparalite">Intellicomm solutions & Enterprises
			Private Limited is a company that operates its website
			www.tayyarah.com using the below Privacy Policy. Tayyarah travel
			website offers you the best prices on flights, hotels and holiday
			packages across India and the world. Tayyarah makes planning and
			buying a holiday or a business trip easy and convenient. Our office
			is located at No.19, 2nd Floor, "The Oyster"Nandidurga Road,
			Jayamahal extension, Bangalore -560046 . Ph + 91-80-4285555.</p>
		<p>Tayyarah reserves the right to charge transaction fees based on
			certain completed transactions using its services. The user shall be
			completely responsible for all charges, fees, duties, taxes, and
			assessments arising out of the use of the services. we further
			reserves the right to alter any and all fees from time to time,
			without prior notice. Some of our web pages use "cookies" so that we
			can better serve you with customized information when you return to
			our site. Cookies are identifiers which web sites send to the browser
			on your computer to facilitate your next visit to our site. You can
			set your browser to notify you when you are sent a cookie, giving you
			the option to decide whether or not to accept it. The information we
			collect and analyze is used to improve our service and can serve you
			better.</p>

		<p class="linespacepara">Tayyarah collects the following personal
			sensitive information from you while transacting through us:</p>

		<ul class="PolicyBullets">
			<li>Name and Sex</li>
			<li>Address</li>
			<li>Phone Number</li>
			<li>Credit or Debit Card details / Expiry / CVV</li>
			<li>Date of birth in case of a child</li>
		</ul>

		<p class="linespacepara">
			Tayyarah takes appropriate steps to protect the information you share
			with us. We have implemented technology and security features and
			strict policy guidelines to safeguard the privacy of your personally
			identifiable information from unauthorized access and improper use or
			disclosure. Please contact us on <a href="mailto:care@tayyarah.com">care@tayyarah.com</a>
			to obtain names and addresses of the specific entities that shall
			have access to your personal information in a given transaction
		</p>

		<p class="linespaceparalite">If our privacy policy changes in the
			future, it will be posted here & you should access our privacy policy
			regularly to ensure you understand our current policies.</p>

		<p class="h3 pull-right ">Thank you for choosing Tayyarah !</p>
	</div>
</article>



<!-- Your site ends -->
<script>
	
</script>

<script>
	$(document).ready(function() {
		$('#login-trigger').click(function() {
			$(this).next('#login-content').slideToggle();
			$(this).toggleClass('active');

			if ($(this).hasClass('active'))
				$(this).find('span').html('&#x25B2;')
			else
				$(this).find('span').html('&#x25BC;')
		})
	});
</script>
