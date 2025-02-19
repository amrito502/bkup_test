<?php


namespace App\Traits;


trait General
{
    private function controlRedirection($request, $route, $model){
        switch ($request) {
            case $request->has('save_and_add'):
                return redirect()->back();
                break;
            case $request->has('save'):
                return redirect()->route($route.'.index');
                break;
            case $request->has('update'):
                return redirect()->route($route.'.index');
                break;
            default :
                return redirect()->route($route.'.index');
        }
    }

    private function showToastrMessage($type, $message)
    {
        switch ($type) {
            case 'success':
                return toastr()->success($message, '', ["positionClass" => "toast-bottom-right"]);
                break;
            case 'warning':
                return toastr()->warning($message, '', ["positionClass" => "toast-bottom-right"]);
                break;
            case 'error':
                return toastr()->error($message, '', ["positionClass" => "toast-bottom-right"]);
                break;
            default:
                return toastr()->success($message, '', ["positionClass" => "toast-bottom-right"]);
        }
    }
}
