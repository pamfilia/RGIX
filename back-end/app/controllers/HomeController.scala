package controllers

import javax.inject._

import play.api.libs.oauth.{ConsumerKey, OAuthCalculator}
import play.api.libs.ws.WSClient
import play.api.mvc.{AbstractController, ControllerComponents}

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(ws:WSClient,cc: ControllerComponents,configuration: play.api.Configuration) extends AbstractController(cc)
  with play.api.i18n.I18nSupport  {

  /**
   * Create an Action to render an HTML page with a welcome message.
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */
  def index = Action {implicit request =>

    val c:Option[String]=None
    val r = c match {
      case Some(s)=> s
      case None => "?"
    }

    Ok(views.html.index(s"$r",cc.langs.availables.head.code,configuration.underlying.getString("environment.user")))
  }

}
