<?php

namespace App\Listeners;

use App\Events\AjouterProduct;
use App\Mail\MailWelcome;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class AjouterProductListnner
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        //Mail::to($event->journal->email)->send(new MailWelcome($event)) ;

        DB::table('journal')->insert([
            'username' => "admin",
            'operation' => ' Ajouter Produit',
            'operation_time' => Carbon::now(),
        ]);
    }
}
