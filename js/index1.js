document.addEventListener('readystatechange',function(){
	if(document.readyState === 'complete'){
		var user = document.getElementsByClassName('user')[0];
		    mask = document.getElementById('user-mask');
		    guest = document.getElementsByClassName('guest')[0];
		    usermore = document.getElementsByClassName('user-more')[0];
		    guideroles = document.getElementsByClassName('guide-roles')[0];
		    discover = document.getElementsByClassName('discover')[0];
		    panel = document.getElementsByClassName('discover-panel')[0];
		    back = document.getElementsByClassName('discover-search-back')[0];
            spinner_ring = document.getElementsByClassName('spinner_ring')[0];
            articlemore = document.getElementsByClassName('article-more');
            articlelink = document.getElementsByClassName('article-link');
		    articleaction = document.getElementsByClassName('article-action');
            guideback = document.querySelector('.guide-back img');
            weibo = document.querySelector('.weibo');
            weibol = document.querySelector('.weibo-login');
            userb = document.querySelectorAll('.user-back');
            btn = document.querySelector('.guest-login-btn');
            rukou = document.querySelector('.rukou');
            roles = document.querySelector('.roles');
		    rmask = document.querySelectorAll('.role-mask');

        usermore.onclick = function(){
            guideroles.style.transform = 'translate3d(0, 0, 0)';
            guideroles.style.opacity = 1;
            guideback.onclick = function(){
        	guideroles.style.transform = 'translate3d(0, -100%, 0)';
            guideroles.style.opacity = 0;
          }
        }
       
	}
})