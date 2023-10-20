
<div class="container mt-4">
        <div class="card" style="width: 18rem;">            
            <div class="card-header">Register Form</div>    
            <div class="card-body">
                <form action="/auth/register" method="POST">
                    
                    <div class="mb-3">
                        <label for="email-reg" class="form-label">Email</label>
                        <input type="text" class="form-control" id="email-reg" name="email">                        
                    </div>
                    <div class="mb-3">
                        <label for="password-reg" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password-reg" name="password">
                    </div>
                    <div class="mb-3">
                        <label for="password-conf-reg" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="password-conf-reg" name="password-confirm">
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>