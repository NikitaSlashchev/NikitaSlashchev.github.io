if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            new fullpage('#fullpage', {
                //options here
                autoScrolling: false,
                scrollHorizontally: true
            });
        }else{
               new fullpage('#fullpage', {
            //options here
            autoScrolling: true,
            scrollHorizontally: true,
            navigation: true
        });
        };