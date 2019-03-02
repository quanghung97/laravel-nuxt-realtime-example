<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
//use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;

use App\User;

class PrivateMessage implements ShouldBroadcast
{
    public $message;
    public $user;
    public $channelId;

    //public $brokenLinks;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($message, User $user, $channelId)
    {
        $this->message = $message;
        $this->user = $user;
        $this->channelId = $channelId;
        // $rawLinks = ;
        // foreach ($rawLinks as $value) {
        //     unset($value->id);
        //     unset($value->shop_id);
        //     unset($value->created_at);
        //     unset($value->updated_at);
        // }
        //$this->brokenLinks = BrokenLink::where('shop_id', $user->shop_id)->select('find_on_url', 'broken_link')->get()->toArray();
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('notification-' . $this->channelId);
        //return ['notification-' . $this->channelId];
    }
}
