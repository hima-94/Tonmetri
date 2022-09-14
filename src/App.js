
import './App.css';

function App() {
  return (
    <div><br/><br/>
      <div class="d-flex justify-content-xl-center jumbotron jumbotron-fluid rounded">
  <div class="container">
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">sharing <b>Akhil Chakravarthy's</b> Tako Card</label> <br/><br/><br/>
    <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" size="50" maxlength="4" placeholder="Full Name"/><br/> 
    <div class="custom-control custom-radio">
  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
  <label class="custom-control-label" for="customRadio1">WhatsApp</label>
</div>
<div class="custom-control custom-radio">
  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"/>
  <label class="custom-control-label" for="customRadio2">SMS</label>
</div>
<div class="custom-control custom-radio">
  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"/>
  <label class="custom-control-label" for="customRadio2">Email</label>
</div>
  </div><br/>
  <div class="form-group">
   
    <input type="password" class="form-control" id="exampleInputPassword1"  size="50" maxlength="4"  placeholder="EnterPhoneNumber/EnterEmail "/>
  </div><br/>
 
  <button type="submit" class="btn btn-primary but">Submit</button>
</form>
</div>
</div>
     
    </div>
  );
}

export default App;
