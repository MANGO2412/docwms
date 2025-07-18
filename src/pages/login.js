//link del template: https://codepen.io/Mohuth/pen/QWgrPvp

import clsx from 'clsx';

export default function login(){
    return(
      <div class="cont">
        <div class="position-relative">
            <div class="card-validate">
                <h6>Sorry, you don't have access this content <br></br>  type the code  to have access</h6>
                <div> <span>Only g-global team know the code</span> </div>
                <div id="otp" class="inputs inputContener">
                    <input class="m-2 text-center form-control rounded" type="text" id="first" maxlength="1" />
                    <input class="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" />
                    <input class="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" />
                    <input class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" />
                    <input class="m-2 text-center form-control rounded" type="text" id="fifth" maxlength="1" />
                    <input class="m-2 text-center form-control rounded" type="text" id="sixth" maxlength="1" />
                </div>
                <div class="mt-4"> 
                    <button id="validateBtn" class="btn btn-danger px-4 validate">Validate</button> 
                </div>
            </div>
        </div>
     </div>
    )
}